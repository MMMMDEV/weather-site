import { displayBottom, displayTop } from "./functions/dom";
import { latLon } from "./functions/getData";

import "./normalize.css";
import "./style.css";
import "./styleLinks.css";

displayTop(latLon("nashville"));
displayBottom(latLon("nashville"));
