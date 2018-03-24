from math import floor
import random

def generate_map(y_size, x_size, max_rooms):

    grid = [[0 for _ in range(x_size+2)] for _ in range(y_size+2)]

    first_room = (floor(len(grid)/2), floor(len(grid[0])/2))
    grid[first_room[0]][first_room[1]] = 1
    rooms = []
    rooms.append(first_room)

    while len(rooms) < max_rooms:
        for room in rooms:
            if adjacent_empty(grid, room[0], room[1]):
                tiles = adjacent_empty(grid, room[0], room[1])
                num_free = len(tiles)
                chosen = tiles[floor(random.random()*num_free)]
                if chosen[0] >= 0 and chosen[0] < len(grid) and chosen[1] >= 0 and chosen[1] < len(grid[chosen[0]]):
                    if len(adjacent_empty(grid, chosen[0], chosen[1])) > 2:
                        grid[chosen[0]][chosen[1]] = 1
                        rooms.append(chosen)
                        if len(rooms) >= max_rooms:
                            break
                # render(grid)

    possible_ends = []
    for room in rooms:
        if len(adjacent_empty(grid, room[0], room[1])) == 3:
            possible_ends.append((room[0], room[1]))

    num_free = len(possible_ends)
    end = possible_ends[floor(random.random()*num_free)]
    start = end
    while start is end:
        start = possible_ends[floor(random.random()*num_free)]

    grid[start[0]][start[1]] = 2
    grid[end[0]][end[1]] = 3

    grid = grid[1:-1]
    for i in range(len(grid)):
        grid[i] = grid[i][1:-1]

    return grid

def render(grid):
    for i in grid:
        print(i)
    print()

def adjacent_empty(grid, y, x):
    empty_tiles = []
    if y-1 >= 0:
        if grid[y-1][x] == 0:
            empty_tiles.append((y-1, x))
    if y+1 < len(grid):
        if grid[y+1][x] == 0:
            empty_tiles.append((y+1, x))
    if x-1 >= 0:
        if grid[y][x-1] == 0:
            empty_tiles.append((y, x-1))
    if x+1 < len(grid[y]):
        if grid[y][x+1] == 0:
            empty_tiles.append((y, x+1))
    return empty_tiles
