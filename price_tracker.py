import requests
from bs4 import BeautifulSoup
import time

#checking prices on online product and checking 
url = input('Enter the URL: ')
headers = {
    "User-Agent":'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.87 Safari/537.36'
    }


def price_check():
    data1 = requests.get(url, headers=headers)

    parser = BeautifulSoup(data1.content, 'html.parser')
    parser2 = BeautifulSoup(parser.prettify(), 'html.parser')

    id_name = input('Enter id name for price: ')
    price = parser2.find(id=id_name).get_text()

    num_value_price = float(price[:-2])
    desired_price = int(input('Enter initial price to compare with: '))
    if num_value_price < desired_price:
        print('You have a better price: {0} \n'.format(num_value_price))

#check price once in everyday
while(True):
    price_check()
    time.sleep(60*60*24)