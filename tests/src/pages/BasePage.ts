import { Selector } from "testcafe";

export class BasePage {
  public url = "http://localhost:3020/#";
  public componentId = Selector("[data-id=tests]");
}
