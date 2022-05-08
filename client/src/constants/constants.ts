export const Endpoint =
	process.env.NODE_ENV === "development"
		? "http://localhost:8080"
		: "https://volter-rythm-bot.herokuapp.com";

export const PortalRoot = document.getElementById("portal")!;

export const NotPermittedKeys = [
	"Alt",
	"Shift",
	"Control",
	"Backspace",
	"CapsLock",
	"Enter",
	"F1",
	"F2",
	"F3",
	"F4",
	"F5",
	"F6",
	"F7",
	"F8",
	"F9",
	"F10",
	"F11",
	"F12",
	"Tab",
	"Meta",
	"ArrowLeft",
	"ArrowRight",
	"ArrowUp",
	"ArrowDown",
	"PageDown",
	"End",
	"Clear",
	"PageUp",
	"Home",
	"Delete",
	"Escape",
];
