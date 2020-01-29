import { Constants, Keys, Strings } from "config";

export default class Utils {
  static showLoadingIndicator() {
    if (document.getElementById("loader"))
      document.getElementById("loader").style.display = "flex";
  }

  static hideLoadingIndicator() {
    document.getElementById("loader").style.display = "none";
  }
}
