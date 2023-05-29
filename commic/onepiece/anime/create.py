import os
import re

with open('./index.htm', 'r+', encoding='utf8') as f:
    fread = f.readlines()
    
    for i in fread:
        sub1 = re.sub(r'a href="../post', 'a href="../../post',i)
        with open('./index.html', 'a+', encoding='utf8') as file:
            file.writelines(sub1)