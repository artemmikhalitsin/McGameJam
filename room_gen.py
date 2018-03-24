from enum import Enum

def generate_rooms(grid):
    for row, _ in enumerate(grid):
        for col, _ in enumerate(grid[row]):
            grid[row][col] = generate_room(grid[row][col])

# avoiding OOP so that we can jsonify this
def generate_room(value):
    room = {
        "type":"wall",
        "difficulty":0,
        "completed":False
    }
    if value == RoomType.PATH.value:
        room['type'] = "path"
    if value == RoomType.BOSS.value:
        room['type'] = "boss"
        room['difficulty'] = 10
    if value == RoomType.START.value:
        room['type'] = "start"
    if value == RoomType.TREASURE.value:
        room['type'] = "treasure"
    return room


class RoomType(Enum):
    WALL = 0
    PATH = 1
    START = 2
    BOSS = 3
    TREASURE = 4
