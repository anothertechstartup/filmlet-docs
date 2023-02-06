---
sidebar_position: 2
title: Timeslots
---

# Overview

**A timeslot represents an event that occurs in the flow of a schedule.**

## Types

When creating the timeslot, one of the defined types must be selected.

### Move

When a move element is used in the flow, the location of all subsequent timeslots changes to the location selected in the move.
With the [smart move](smart_move.md) functionality a google maps is route calculated.

### Shooting

Contains information about a scene to be shot. It must be referred to a scene.

### Others

All other types like Meeting, Load or Break only contain basic information and, thanks to their defined color and icon, offer a better overview of the flow

![An image from the static](/img/timeslots_types.png)

## Timeslot Order

The order of the timeslots in a schedule can easily be changed, by holding on the time on the left of an element and drag it to the desired position.
The times of all the other timeslots adapt to the changes, and the start times are calculated.

![An image from the static](/img/timeslots_overview.png)
