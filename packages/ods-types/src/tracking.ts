export type TrackingEventHandler = (event: TrackingEvent) => void;

export interface TrackingEvent {
  /**
   * The type of component clicked on. e.g Component.displayName
   */
  type: string;
  /**
   * This label of the component. Eg button, checkbox label.
   */
  label: string;
  /**
   * This unique id of the component. e.g pass in data-id.
   */
  ["data-id"]: string;
  /**
   * Used for Accordion, Checkbox, RadioButton
   */
  postClickState?: string;
}
