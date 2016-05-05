import os

try:
    os.chdir(".\\..\\_posts")

    for name in os.listdir("./"):
    
        f = open(name, "r")
        contents = f.readlines()
        f.close()

        contents.insert(6, "edition: 1\n")

        f = open(name, "w")
        contents = "".join(contents)
        f.write(contents)
        f.close()
except OSError:
    print "That is an invalid directory"
