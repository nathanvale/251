import React, { useState } from "react";
import styled from "styled-components";
import sortBy from "lodash/sortBy";
import didYouMean, { ReturnTypeEnums } from "didyoumean2";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import {
  Box,
  Heading,
  InputAdornment,
  Stack,
  Strong,
  Text,
  TextFieldBase,
  TextLink,
} from "@origin-digital/ods-core";
import { icons } from "@origin-digital/ods-icons";
import { Overlay } from "../../../Overlay/Overlay";
import { DocsPage } from "../../../../types";

const IconSearch = icons.IconSearch;

type IconName = keyof typeof icons;

let iconNames = Object.keys(icons)
  .filter((icon) => icon.startsWith("Icon"))
  .map((icon) => ({
    name: icon as IconName,
    displayName: icon.replace(/^Icon/, ""),
  }));
iconNames = sortBy(iconNames, (obj) => obj.displayName);

const Container = styled(Box)``;

const HoverOverlay = styled(Overlay)`
  /* stylelint-disable selector-type-no-unknown */
  ${Container}:hover & {
    opacity: 1;
    box-shadow: inset 0 0 0 1px #c4c4c4;
  }
`;

const IconTile = ({
  icon,
  suggestion = false,
}: {
  icon: typeof iconNames[number];
  suggestion?: boolean;
}) => {
  const IconComponent = icons[icon.name];

  return (
    <Box width="full">
      <Text truncate>
        <TextLink href={`#/components/${icon.name}`}>
          <Container
            position="relative"
            display="flex"
            flexDirection="column"
            alignItems="center"
            paddingX="xxsmall"
            paddingY="medium"
            cursor="pointer"
            width="full"
          >
            <Box padding="xsmall">
              <IconComponent
                size="medium"
                tone={suggestion ? "critical" : "secondaryB"}
              />
            </Box>
            <Box
              paddingTop="xsmall"
              paddingX="xxsmall"
              overflow="hidden"
              width="full"
              style={{
                whiteSpace: "nowrap",
                textOverflow: "ellipsis",
                textAlign: "center",
              }}
            >
              {icon.displayName}
            </Box>
            <HoverOverlay transition="fast" />
          </Container>
        </TextLink>
      </Text>
    </Box>
  );
};

const Icons = () => {
  const [iconList, setIconList] = useState(iconNames);
  const [searchTerm, setSearchTerm] = useState("");
  const [isDisambiguated, setDisambiguated] = useState(false);
  const theme = useTheme();
  const isXsUp = useMediaQuery(theme.breakpoints.only("xs"));
  const isSmUp = useMediaQuery(theme.breakpoints.only("sm"));
  const isMdUp = useMediaQuery(theme.breakpoints.only("md"));
  const isLgUp = useMediaQuery(theme.breakpoints.only("lg"));
  const isXlUp = useMediaQuery(theme.breakpoints.only("xl"));

  let width = "100%";
  if (isXsUp) {
    width = `${100 / 2}%`;
  }
  if (isSmUp) {
    width = `${100 / 3}%`;
  }
  if (isMdUp) {
    width = `${100 / 3}%`;
  }
  if (isLgUp) {
    width = `${100 / 5}%`;
  }
  if (isXlUp) {
    width = `${100 / 6}%`;
  }

  return (
    <Stack>
      <Heading variant="h3">Icon library</Heading>
      <Text>
        ODS features a library of ready to use energy industry related icons. If
        you need a custom SVG icon, not available in this icon library, then you
        can easily create your own by using the{" "}
        <TextLink href="#/components/SvgIcon">SvgIcon</TextLink> component.
      </Text>
      <Heading variant="h4">Looking for an icon?</Heading>

      <TextFieldBase
        id="iconSearch"
        variant="outlined"
        size="small"
        startAdornment={
          <InputAdornment position="start">
            <IconSearch tone="inherit" />
          </InputAdornment>
        }
        placeholder="Search"
        value={searchTerm}
        onChange={({ currentTarget }) => {
          const searchText = currentTarget.value;

          setSearchTerm(searchText);
          const filteredList = iconNames.filter(
            ({ name }) =>
              searchText.length === 0 ||
              name.toLowerCase().indexOf(searchText.toLowerCase()) > -1
          );

          if (filteredList.length === 0) {
            const suggestions =
              didYouMean(searchText, iconNames, {
                returnType: ReturnTypeEnums.ALL_CLOSEST_MATCHES,
                matchPath: ["displayName"],
              }) ?? [];
            const suggestionList = Array.isArray(suggestions)
              ? suggestions
              : [suggestions];

            setDisambiguated(suggestionList && suggestionList.length > 0);
            setIconList(suggestionList);
          } else {
            setDisambiguated(false);
            setIconList(filteredList);
          }
        }}
      />

      {isDisambiguated || iconList.length === 0 ? (
        <Text tone="critical">
          No icons matching <Strong>`{searchTerm}`</Strong>
          {isDisambiguated ? (
            <span>
              , did you mean{" "}
              {iconList.length === 1 ? (
                <Strong>`{iconList[0].displayName}`</Strong>
              ) : (
                "one of these"
              )}
              :
            </span>
          ) : (
            "."
          )}
        </Text>
      ) : null}

      <Box display="flex" flexDirection="row" style={{ flexWrap: "wrap" }}>
        {iconList.map((icon) => (
          <Box key={icon.name} display="flex" style={{ width }}>
            <IconTile icon={icon} suggestion={isDisambiguated} />
            <Box paddingRight={["none", "small"]} />
          </Box>
        ))}
      </Box>
    </Stack>
  );
};

const page: DocsPage = {
  title: "Icon library",
  component: Icons,
};

export default page;
