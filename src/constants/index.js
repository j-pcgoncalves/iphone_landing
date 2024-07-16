import { color, label } from "three/examples/jsm/nodes/Nodes.js";
import { 
    blackImg,
    blueImg,
    highlightFirstVideo, 
    highlightFourthVideo, 
    highlightSecondVideo, 
    highlightThirdVideo,
    whiteImg,
    yellowImg, 
} from "../utils";

export const navLists = ["Store", "Mac", "iPhone", "Support"];

export const highlightsSlides = [
    {
        id: 1,
        textLists: [
            "Enter A17 Pro.",
            "Game-changing chip.",
            "Groundbreaking performance.",
        ],
        video: highlightFirstVideo,
        videoDuration: 4,
    },
    {
        id: 2,
        textLists: [
            "Titanium.",
            "So strong. So light. So Pro.",
        ],
        video: highlightSecondVideo,
        videoDuration: 5,
    },
    {
        id: 3,
        textLists: [
            "iPhone 15 Pro Max has the",
            "longest optical zoom in",
            "iPhone ever. Far out.",
        ],
        video: highlightThirdVideo,
        videoDuration: 2,
    },
    {
        id: 4,
        textLists: [
            "All-new Action button.",
            "What will yours do?",
        ],
        video: highlightFourthVideo,
        videoDuration: 3.63,
    }
];

export const models = [
    {
        id: 1,
        title: "iPhone 15 Pro in Natural Titanium",
        color: ["#8F8A81", "#FFE7B9", "#6F6C64"],
        img: yellowImg,
    },
    {
        id: 2,
        title: "iPhone 15 Pro in Blue Titanium",
        color: ["#53596E", "#6395FF", "#21242E"],
        img: blueImg,
    },
    {
        id: 3,
        title: "iPhone 15 Pro in White Titanium",
        color: ["#C9C8C2", "#FFFFFF", "#C9C8C2"],
        img: whiteImg,
    },
    {
        id: 4,
        title: "iPhone 15 Pro in Black Titanium",
        color: ["#454749", "#3B3B3B", "#181819"],
        img: blackImg,
    },
]

export const sizes = [
    { label: '6.1"', value: "small" },
    { label: '6.7"', value: "large" },
];