import pic_1 from "./pictures/pic_1.jpg";
import pic_2 from "./pictures/pic_2.jpg";
import pic_3 from "./pictures/pic_3.jpg";
import pic_4 from "./pictures/pic_4.jpg";
import pic_5 from "./pictures/pic_5.png";
import pic_6 from "./pictures/pic_6.png";
import pic_7 from "./pictures/pic_7.png";
import pic_8 from "./pictures/pic_8.png";

/*
replace these tonight
*/
export type dataElem = {
	label: string,
	value: string,
}

export type linkGroup = {
	title: string;
	links: dataElem[];
}


export const links: linkGroup[] = [
	
  {
    "title": "school",
    "links": [
		{
			"label": "canvas",
			"value": "https://canvas.houstonisd.org/"
		  },
		  {
			"label": "clever",
			"value": "https://www.houstonisd.org/DigitalResources"
		  },
		  {
			"label": "grades",
			"value": "https://hisdconnect.houstonisd.org/public/"
		  },
		  {
			"label": "edpuzzle",
			"value": "https://edpuzzle.com/classes/62041efe99c34142f4591fb8"
		  },
		  {
			"label": "docs",
			"value": "https://docs.google.com/document/u/0/"
		  },
		  {
			"label": "drive",
			"value": "https://drive.google.com/drive/u/0/my-drive"
		  },
		  {
			"label": "udemy",
			"value": "https://gale.udemy.com/organization/home/"
		  },
		  {
			"label": "icloud",
			"value": "https://www.icloud.com/"
		  }
    ]
  },
  {
    "title": "entertainment",
    "links": [
		{
			"label": "youtube",
			"value": "https://www.youtube.com/"
		  },
		  {
			"label": "netflix",
			"value": "https://www.netflix.com/browse"
		  },
		
		  {
			"label": "wordle",
			"value": "https://www.nytimes.com/games/wordle/index.html"
		  },
		  {
			"label": "globle",
			"value": "https://globle-game.com/"
		  }
    ]
  },
  {
    "title": "other",
    "links": [
		{
			"label": "monkeytype",
			"value": "https://monkeytype.com/"
		  },
		  {
			"label": "amazon",
			"value": "https://www.amazon.com/ref=nav_logo"
		  },
		  {
			"label": "maps",
			"value": "https://www.google.com/maps"
		  },
		  {
			"label": "github",
			"value": "https://github.com/"
		  }
    ]
  }
]

export const images: dataElem[] = [
	{ label: "pic_1", value: pic_1 },
	{ label: "pic_2", value: pic_2 },
	{ label: "pic_3", value: pic_3 },
	{ label: "pic_4", value: pic_4 },
	{ label: "pic_5", value: pic_5 },
	{ label: "pic_6", value: pic_6 },
	{ label: "pic_7", value: pic_7 },
	{ label: "pic_8", value: pic_8 },
];

export const searchEngines: dataElem[] = [
	{
		label: "Google",
		value: "google.com/search",
		
	},
	{
		label: "DuckDuckGo",
		value: "duckduckgo.com/",	
	},
	{
		label: "Qwant",
		value: "qwant.com/",
	},
];

export type FastForwards = {
	[key: string]: string,
}

export type Search = {
	engine: string,
	fastForward: FastForwards,
}

export const searchSettings: Search = {
	engine: searchEngines[0].value,
	fastForward: {
		"deepl": "https://deepl.com/",
		"maps": "https://google.de/maps/",
		"reddit": "https://reddit.com/",
		"github": "https://github.com/",
		"gitlab": "https://gitlab.com/",
		"youtube": "https://youtube.com/",
	}
}

export type colorsType = {
	[key: string]: string
	"--bg-color": string,
	"--default-color": string,
	"--accent-color": string,
	"--accent-color2": string,
}

export type Theme = {
	name: string;
	colors: colorsType;
	image: string;
}

export const themes: Theme[] = [
	{
		name: "STARBOY",
		image: pic_3,
		colors: {
			"--bg-color": "#000000",
			"--default-color": "#EBB365",
			"--accent-color": "#E46595",
			"--accent-color2": "#0D5DCF",
		},
	},
	{
		name: "AFTERHOURS",
		image: pic_2,
		colors: {
			"--bg-color": "#000000",
			"--default-color": "#DD0D12",
			"--accent-color": "#FFFFFF",
			"--accent-color2": "#DD0D12",
		},
	},
	{

		name: "KISSLAND",
		image: pic_1,
		colors: {
			"--bg-color": "#000000",
			"--default-color": "#2FF9A5",
			"--accent-color": "#FFFFFF",
			"--accent-color2": "#46FBB4",
		},
	},
	{
		name: "MELANCHOLY",
		image: pic_4,
		colors: {
			"--bg-color": "#000000",
			"--default-color": "#5B2720",
			"--accent-color": "#9D3416",
			"--accent-color2": "#702F07"
		}
	},
	{
		name: "DAWNFM",
		image: pic_5,
		colors: {
			"--bg-color": "#211E10",
			"--default-color": "#B72C14",
			"--accent-color": "#C2D5DC",
			"--accent-color2": "#DDD0BA"
		}
	},
	{
		name: "MADNESS",
		image: pic_6,
		colors: {
			"--bg-color": "#181818",
			"--default-color": "#DD5031",
			"--accent-color": "#D4C835",
			"--accent-color2": "#DBE5E6"
		}
		
	
	},
	{
		name: "TRILOGY",
		image: pic_7,
		colors: {
			"--bg-color": "#000000",
			"--default-color": "#FFFFFF",
			"--accent-color": "#858585",
			"--accent-color2": "#FFFFFF"
		}
	}
]