export default class ChessPiece {
    /**
     * This acts as the parent to all chess pieces, to simplify the logic for each component.
     * Should identify which player the chess piece belongs to, and the icon for each one.
     * @param {string} whichPlayer "white" or "black" to identify which player.
     * @param {string} icon A string that identifies the font-awesome icon to be used. 
     */
    constructor(whichPlayer, icon) {
        this.player = whichPlayer;
        this.icon = icon;
    }
}