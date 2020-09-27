// import designWorkflow from "./design-workflow";
import developmentWorkflow from "./development-workflow";
import trackingGuide from "./tracking-guide";
import { migrationGuideRoutes } from "./migration-guides";

export default {
  routes: {
    // "/guides/design-workflow": designWorkflow,
    "/guides/development-workflow": developmentWorkflow,
    "/guides/tracking-guide": trackingGuide,
    ...migrationGuideRoutes,
  },
  links: {
    // "/guides/design-workflow": designWorkflow,
    "/guides/development-workflow": developmentWorkflow,
    "/guides/tracking-guide": trackingGuide,
    "/guides/migration-guide": migrationGuideRoutes["/guides/migration-guide"],
  },
};
