import initDFChatArchive from "./archive/df-chat-archive.js";
import initDFChatPrivacy from "./privacy/df-chat-privacy.js";

(Application.prototype as any)._recalculateDimensions = function () {
	this.element[0].style.height = '';
	this.element[0].style.width = '';
	this.setPosition({});
}

Hooks.once('init', function() {
	/**
	 * Order here matters! The archive adds a button to the
	 * chat window, while the privacy changes those buttons
	 * from <a> tags to <button> tags if enabled.
	 */
	initDFChatArchive();
	initDFChatPrivacy();
});
