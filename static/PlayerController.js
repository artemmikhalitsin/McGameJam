let left = keyboard(37),
up = keyboard(38),
right = keyboard(39),
down = keyboard(40);

//Left arrow key `press` method
left.press = () => {
//Change the cat's velocity when the key is pressed
if(sprites.player.x == 130 ){
}
else {
//  for (let i = 0; i< 1000; i++)
sprites.player.x -= 120;
}
};

//Left arrow key `release` method
left.release = () => {


};

//Up
up.press = () => {
if(sprites.player.y == 300 ){
}
else {
sprites.player.y -= 100;
}
};
up.release = () => {

};

//Right
right.press = () => {
//Change the cat's velocity when the key is pressed
if(sprites.player.x == 490 ){
}
else {
sprites.player.x += 120;
}
};

right.release = () => {
};

//Down
down.press = () => {
if(sprites.player.y == 500){
}
else {
sprites.player.y += 100;
}
};
down.release = () => {

};
