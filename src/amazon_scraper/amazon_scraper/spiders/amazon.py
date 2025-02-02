import scrapy
from amazon_scraper.items import AmazonScraperItem

class AmazonSpider(scrapy.Spider):
    name = "amazon"
    allowed_domains = ["movistar.es"]
    start_urls = [
        "https://www.movistar.es/moviles/?sort=relevance&pageSize=39&category=smartphone&pageIndex=0"  # Modifica la búsqueda según lo que necesites
    ]

    # Configuración personalizada (cambia el User-Agent para simular un navegador)
    custom_settings = {
        'USER_AGENT': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) '
                      'AppleWebKit/537.36 (KHTML, like Gecko) '
                      'Chrome/110.0.0.0 Safari/537.36'
    }

    def parse(self, response):
        # Iteramos sobre cada producto en la página de resultados
        for product in response.css("div.device-card--container"):
            item = AmazonScraperItem()
            item['title'] = product.css("h3.device-card--container--name--text::text").get()
            # item['price'] = product.css("span.a-price > span.a-offscreen::text").get()
            # item['image_url'] = product.css("img.s-image::attr(src)").get()
            # item['rating'] = product.css("span.a-icon-alt::text").get()
            # item['review_count'] = product.css("span.a-size-base::text").get()
            yield item

        # Manejo de paginación
        next_page = response.css("li.a-last a::attr(href)").get()
        if next_page:
            yield response.follow(next_page, callback=self.parse)

# import scrapy
# from amazon_scraper.items import AmazonScraperItem

# class AmazonSpider(scrapy.Spider):
#     name = "amazon"
#     allowed_domains = ["amazon.es"]
#     start_urls = [
#         "https://www.amazon.es/s?k=smartphones"  # Modifica la búsqueda según lo que necesites
#     ]

#     # Configuración personalizada (cambia el User-Agent para simular un navegador)
#     custom_settings = {
#         'USER_AGENT': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) '
#                       'AppleWebKit/537.36 (KHTML, like Gecko) '
#                       'Chrome/110.0.0.0 Safari/537.36'
#     }

#     def parse(self, response):
#         # Iteramos sobre cada producto en la página de resultados
#         for product in response.css("div.s-result-item"):
#             asin = product.attrib.get("data-asin")
#             if not asin:
#                 continue  # Saltamos elementos que no tengan ASIN (pueden ser anuncios u otros bloques)
#             item = AmazonScraperItem()
#             item['title'] = product.css("h2.a-size-base-plus.a-spacing-none.a-color-base.a-text-normal span::text").get()
#             item['price'] = product.css("span.a-price > span.a-offscreen::text").get()
#             item['image_url'] = product.css("img.s-image::attr(src)").get()
#             item['rating'] = product.css("span.a-icon-alt::text").get()
#             item['review_count'] = product.css("span.a-size-base::text").get()
#             yield item

#         # Manejo de paginación
#         next_page = response.css("li.a-last a::attr(href)").get()
#         if next_page:
#             yield response.follow(next_page, callback=self.parse)

# import scrapy
# from amazon_scraper.items import AmazonScraperItem

# class PcComponentesSpider(scrapy.Spider):
#     name = "pccomponentes"
#     allowed_domains = ["pccomponentes.com"]
#     start_urls = [
#         "https://www.pccomponentes.com/smartphone-moviles"
#     ]

#     custom_settings = {
#         'USER_AGENT': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36',
#         'ROBOTSTXT_OBEY': False,
#         'DOWNLOAD_DELAY': 1,  # Retraso para evitar bloqueos
#         'CONCURRENT_REQUESTS': 2
#     }

#     def start_requests(self):
#         headers = {
#             'User-Agent': self.custom_settings['USER_AGENT'],
#             'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
#             'Accept-Language': 'es-ES,es;q=0.9,en;q=0.8',
#             'Referer': 'https://www.google.com'
#         }
#         # Si el sitio muestra un aviso de cookies, es posible que necesites enviar la cookie de aceptación.
#         cookies = {
#             # Ejemplo (ajusta según lo que observe en el navegador):
#             # 'cookie_consent': 'true'
#         }
#         for url in self.start_urls:
#             yield scrapy.Request(url, headers=headers, cookies=cookies, callback=self.parse)

#     def parse(self, response):
#         self.logger.info("Status code: %s", response.status)
#         # Guarda el HTML para depuración y comprobar si se ha cargado correctamente
#         with open("debug_pccomponentes.html", "wb") as f:
#             f.write(response.body)
        
#         # Iteramos sobre cada producto: usamos el selector del enlace con data-testid="normal-link"
#         for product in response.css('a[data-testid="normal-link"]'):
#             item = AmazonScraperItem()
            
#             # Extraemos el título usando el <h3> con data-e2e="title-card"
#             title = product.css('h3[data-e2e="title-card"]::text').get()
#             item['title'] = title.strip() if title else ""
            
#             # Extraemos el precio usando el span con data-e2e="price-card"
#             price = product.css('span[data-e2e="price-card"]::text').get()
#             item['price'] = price.strip() if price else ""
            
#             # Extraemos la URL de la imagen: dentro del div con clase product-card__img-container
#             image_url = product.css("div.product-card__img-container img::attr(src)").get()
#             item['image_url'] = image_url.strip() if image_url else ""
            
#             yield item

#         # Opcional: manejo de paginación, ajusta el selector si fuera necesario
#         next_page = response.css('a.pagination-next::attr(href)').get()
#         if next_page:
#             yield response.follow(next_page, callback=self.parse)




# import scrapy
# from amazon_scraper.items import AmazonScraperItem

# class ElCorteInglesSpider(scrapy.Spider):
#     name = "elcorteingles"
#     allowed_domains = ["elcorteingles.es"]
#     start_urls = [
#         "https://www.elcorteingles.es/electronica/moviles-y-smartphones/"
#     ]

#     custom_settings = {
#     'USER_AGENT': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36',
#     'ROBOTSTXT_OBEY': False,
#     'TELNETCONSOLE_ENABLED': False,  # Desactiva la consola Telnet
#     'DOWNLOAD_TIMEOUT': 30  # Opcional: aumenta el timeout para evitar cortes
# }

#     def start_requests(self):
#         for url in self.start_urls:
#             yield scrapy.Request(
#                 url,
#                 callback=self.parse,
#                 headers={
#                     "User-Agent": self.custom_settings.get("USER_AGENT"),
#                     "Accept-Language": "es-ES,es;q=0.9,en;q=0.8",
#                     "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8"
#                 }
#             )

#     def parse(self, response):
#         print("Status code:", response.status)
#         with open("debug.html", "wb") as f:
#             f.write(response.body)
#         # Si llegamos a este punto, se guardó el HTML descargado
#         for product in response.css("div.card"):
#             item = AmazonScraperItem()
#             title_list = product.css("div.product_preview-brand *::text").getall()
#             item['title'] = " ".join(title_list).strip()
#             item['price'] = product.css("span.price-sale::text").get(default="").strip()
#             item['image_url'] = product.css("img::attr(src)").get(default="")
#             yield item

#         next_page = response.css("a.next::attr(href)").get()
#         if next_page:
#             yield response.follow(next_page, callback=self.parse)


