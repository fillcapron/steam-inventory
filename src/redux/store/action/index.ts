import { ItemsActions } from "./itemsActions";
import { PriceAtions } from "./priceActions";
import { ProfileActions } from "./profileActions";

export const allActions = {
    ...ItemsActions,
    ...PriceAtions,
    ...ProfileActions
}