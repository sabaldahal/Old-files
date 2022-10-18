import math
#open file
fidref = open('Refraction.txt','r')  
#copy data
list = fidref.readlines()   
 #close file
fidref.close()                         

#declaring lists
n1 = []                                 
theta1 = []
n2 = []
theta2 = []
theta2a = 0
#extracting data into those lists
for i in range(1,len(list)):            
    separate = list[i].split()
    n1.append(float(separate[0]))
    theta1.append(float(separate[1]))
    n2.append(float(separate[2]))
    
#calculating the value of theta2
for j in range(len(n1)):                                            
    k = (n1[j]/n2[j])*(math.sin(math.radians(theta1[j])))
    theta2a = math.degrees(math.asin(k))
    theta2.append(float(theta2a))


count = len(n1)+1
#declaring list of len(n1)+1 rows and 4 columns        
allData = [[0]*4 for i in range(count)]

#adding the first row to the list
allData[0][0] = 'n1'                                        
allData[0][1] = 'Theta1'
allData[0][2] = 'n2'
allData[0][3] = 'Theta2'
#adding values to the remaing rows of the list
for o in range(len(n1)):                                    
    allData[o+1][0]= ('{0:.3f}' .format(n1[o]))
    allData[o+1][1]= ('{0:.1f}' .format(theta1[o]))
    allData[o+1][2]= ('{0:.3f}' .format(n2[o]))
    allData[o+1][3]= ('{0:.1f}' .format(theta2[o]))
    
#opeining new file to write data
refractedfile = open('output.txt', 'w') 

#writing the list allData to the new file
for m in range(len(n1)+1):
    refractedfile.write('{0} \n'.format(allData[m]))                         
    

refractedfile.close()



