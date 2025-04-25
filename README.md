TYPE list FILTERS bySometime

img
title
category
description
tags
seasons [ { id, chapters[] } ]
totalLenght

TYPE item

title
season {
  id
  chapterId
  chapters {
    lenght
    next
    current
    prev
  }
}
_________________________

TRENDING NOW
POPULAR THIS SEASON
UPCOMING NEXT SEASON
ALL TIME POPULAR

vertical[]
(max lenght 6)
__________________________

VIEW MORE

vertical[]
(pages lenght 20)

__________________________

MF_HOME
/

MF_ANIME
/buscar/:category/:value

MF_CHAPTER
/anime/:id/:name/
/anime/:id/:name/:chapter/