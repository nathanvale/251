import MigrationGuide from "./migration-guide";
import { migrationGuides } from "./migration-guide-list";

export const migrationGuideRoutes = {
  ...migrationGuides.reduce((guideObj, guide) => {
    return {
      ...guideObj,
      [guide.route]: { title: guide.compName, component: guide.PageComp },
    };
  }, {} as any),
  "/guides/migration-guide": MigrationGuide,
};
