import os
path="/home/kning/myblog/source/commic/post/"
flist = os.listdir(path)
print(len(flist))
print(flist)
for fileD in flist:
    files= os.listdir(path+fileD)
    
    for file in files:
        name = file+'l'
        os.rename(file, name)
        # os.rename('index.htm', 'index.html')