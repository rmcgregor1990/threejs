from collections import namedtuple
import random as r



fitBorder = [2,2]

class Rect(namedtuple('Rect', 'left top right bottom')):
    def __new__(cls, left, top, right, bottom):
        self = super(Rect, cls).__new__(cls, left, top, right, bottom)
        self.h = abs(top - bottom)
        self.w = abs(right - left)
        return self


class Node:
    def __init__(self):
        self.child = [None, None];
        self.rec = None;
        self.id = None;


def insert(node, rec):
    if node.child[0]:
        newNode = insert(node.child[0], rec)
        if newNode:
            return newNode
        #try second child
        return insert(node.child[0], rec)
    else:
        #is there already something here
        if node.id:
            return None

        #too small
        if (node.rec.h < rec.h or node.rec.w < rec.w):
            return None

        #exact fit
        if (node.rec.h >= rec.h and node.rec.h <= rec.h + fitBorder[0] 
            and node.rec.w >= rec.w and node.rec.w <= rec.w + fitBorder[1]):
            return node

        #otherwise split the node in two
        node.child[0] = Node()
        node.child[1] = Node()

        dw = node.rec.w - rec.w
        dh = node.rec.h - rec.h
        
        if dw > dh:
            node.child[0].rec = Rect(node.rec.left, node.rec.top, 
                                       node.rec.left+rec.w-1, node.rec.bottom)
            node.child[1].rec = Rect(node.rec.left+rec.w, node.rec.top, 
                                       node.rec.right, node.rec.bottom)
        else:
            node.child[0].rec = Rect(node.rec.left, node.rec.top, 
                                       node.rec.right, node.rec.top+rec.h-1)
            node.child[1].rec= Rect(node.rec.left, node.rec.top+rec.h, 
                                       node.rec.right, node.rec.bottom)
        
        #(insert into first child we created)
        return insert(node.child[1], rec)


base_rect = Rect(0 ,0, 100, 100)
nRoot = Node()
nRoot.rec = base_rect

rect = Rect(0,0,20,20)
shape = {'id': 1, 'rect': rect}

pnode = insert(nRoot, shape['rect'])
pnode.id = shape['id']
print pnode.rec