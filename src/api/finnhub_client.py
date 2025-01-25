import os
import requests

FINNHUB_API_KEY = os.getenv("FINNHUB_API_KEY")
BASE_URL = "https://finnhub.io/api/v1"

def get_stock_data(symbol):
    url = f"{BASE_URL}/quote"
    params = {"symbol": symbol, "token": FINNHUB_API_KEY}
    response = requests.get(url, params=params)
    if response.status_code == 200:
        return response.json()
    else:
        raise Exception(f"Error en la API: {response.status_code}, {response.text}")