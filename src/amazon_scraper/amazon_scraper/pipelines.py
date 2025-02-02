# Define your item pipelines here
#
# Don't forget to add your pipeline to the ITEM_PIPELINES setting
# See: https://docs.scrapy.org/en/latest/topics/item-pipeline.html


# useful for handling different item types with a single interface
from scrapy.exceptions import DropItem
from itemadapter import ItemAdapter

class AmazonScraperPipeline:
    # Define los campos obligatorios
    required_fields = [ 'title', 'image_url']

    def process_item(self, item, spider):
        adapter = ItemAdapter(item)
        for field in self.required_fields:
            if not adapter.get(field):
                raise DropItem(f"Item sin el campo requerido {field}: {item}")
        return item
