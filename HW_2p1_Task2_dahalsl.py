import math
fidref = open('Refraction.txt','r')     #open file
list = fidref.readlines()               #copy data
fidref.close()                          #close file

n1 = []                                 #declaring lists
theta1 = []
n2 = []
theta2 = []
theta2a = 0

for i in range(1,len(list)):            #extracting data into those lists
    separate = list[i].split()
    n1.append(float(separate[0]))
    theta1.append(float(separate[1]))
    n2.append(float(separate[2]))

for j in range(len(n1)):                                            #calculating the value of theta2
    k = (n1[j]/n2[j])*(math.sin(math.radians(theta1[j])))
    theta2a = math.degrees(math.asin(k))
    theta2.append(float(theta2a))

refractedfile = open('output.txt', 'w')               #opeining new file to write data
refractedfile.write('n1 Theta1 n2 Theta2\n')
for m in range(len(n1)):
    refractedfile.write('{0:6.3f} {1:6.1f} {2:6.3f} {3:6.1f} \n'.format(n1[m],theta1[m],n2[m],theta2[m]))              
    

refractedfile.close()
