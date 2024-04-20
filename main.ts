import { Plugin } from "obsidian";

interface ExamplePluginSettings {
  dateFormat: string;
}

const DEFAULT_SETTINGS: Partial<ExamplePluginSettings> = {
  dateFormat: "YYYY-MM-DD",
};

export default class ExamplePlugin extends Plugin {
  settings!: ExamplePluginSettings;

  async onload() {
    await this.loadSettings();

	const item = this.addStatusBarItem();
    item.createEl("div", { text: "Hello from the status bar 👋" });
  }

  async loadSettings() {
    this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
  }

  async saveSettings() {
    await this.saveData(this.settings);
  }
}