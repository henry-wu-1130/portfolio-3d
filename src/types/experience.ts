type I18nText = {
  readonly zh: string;
  readonly en: string;
};

type I18nArray = {
  readonly zh: readonly string[];
  readonly en: readonly string[];
};

type BaseProject = {
  readonly key: string;
  readonly title: I18nText;
};

type DescriptionProject = BaseProject & {
  readonly description: I18nText;
};

type AchievementsProject = BaseProject & {
  readonly achievements: I18nArray;
};

export type Project = DescriptionProject | AchievementsProject;

type BaseExperience = {
  readonly key: string;
  readonly company: I18nText;
  readonly position: I18nText;
  readonly period: string;
  readonly location: string;
};

type ProjectsExperience = BaseExperience & {
  readonly projects: readonly Project[];
};

type AchievementsExperience = BaseExperience & {
  readonly achievements: readonly DescriptionProject[];
};

export type Experience = ProjectsExperience | AchievementsExperience;

export type Experiences = readonly Experience[];
