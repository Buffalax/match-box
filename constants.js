/**
 * Created by Dean Panayotov Local on 4.2.2015 г..
 */

var MAZE_WIDTH = 15;
var MAZE_HEIGHT = 15;

var SCROLL_FIX = 4; // if canvas fits window perfectly Chrome/FF create artificial 4px scroll
var STEP = Math.floor(Math.min(
	(window.innerHeight - SCROLL_FIX)/(MAZE_HEIGHT*2+1),
	window.innerWidth/(MAZE_WIDTH*2+1)
));

var WIDTH = STEP * (MAZE_WIDTH * 2 + 1);
var HEIGHT = STEP * (MAZE_HEIGHT * 2 + 1);

var FRAMES_PER_SECOND = 60;
var WRECK_PERCENTAGE = 1/16;
