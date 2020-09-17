import React from "react";
import { render, fireEvent } from "@origin-digital/ods-testing-library";
import { LinkComponentType } from "@origin-digital/ods-types";
import { OriginThemeProvider } from "../OriginThemeProvider/OriginThemeProvider";
import { TrackingProvider } from "../TrackingProvider/TrackingProvider";
import { Box } from "../Box";
import { TrackedLink } from "./TrackedLink";

test("It can render", () => {
  const { container } = render(
    <TrackedLink trackingType="CustomLink" trackingLabel="Tracked Link" href="">
      Tracked Link
    </TrackedLink>
  );
  expect(container.firstChild).toMatchSnapshot();
});

test("it handles a custom link implementation", () => {
  const onTrackingCapture = jest.fn();
  const onClick = jest.fn();

  const CustomLink: LinkComponentType = ({ href, ...restProps }) => (
    // eslint-disable-next-line jsx-a11y/anchor-has-content
    <a href={href} onClick={onClick} {...restProps} />
  );

  const { getByTestId } = render(
    <OriginThemeProvider linkComponent={CustomLink}>
      <TrackingProvider onTrackingCapture={onTrackingCapture}>
        <TrackedLink
          href=""
          trackingType="CustomLink"
          trackingLabel="The big red box is being tracked!"
          data-id="custom-link"
        >
          <Box backgroundColor="critical" padding="large" />
        </TrackedLink>
      </TrackingProvider>
    </OriginThemeProvider>
  );

  const link = getByTestId("custom-link");
  fireEvent.click(link);

  expect(onClick).toBeCalledTimes(1);
  expect(onTrackingCapture).toBeCalledWith({
    "data-id": "custom-link",
    label: "The big red box is being tracked!",
    postClickState: undefined,
    type: "CustomLink",
  });
});
