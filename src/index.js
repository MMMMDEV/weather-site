import { displayBottom, displayTop } from "./functions/dom";
import { latLon } from "./functions/getData";

import "./normalize.css";
import "./style.css";
import "./images";
import "./links.html";

displayTop(latLon("nashville"));
displayBottom(latLon("nashville"));
