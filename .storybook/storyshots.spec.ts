import path from "path";
import initStoryshots, {
  multiSnapshotWithOptions,
} from "@storybook/addon-storyshots";

initStoryshots({
  suite: "Storyshots",
  framework: "web-components",
  test: (story) => {
    const fileName = path.resolve(__dirname, story.story.id);
    return multiSnapshotWithOptions()({
      ...story,
      context: { ...story.context, fileName },
    });
  },
});
