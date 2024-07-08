from django.db import models

# Create your models here.
class Product(models.Model):
    PRODUCTS_CHOICES = [
        ('B', 'Bebidas'),
        ('S', 'Snacks'),
        ('F', 'Frutas'),
        ('P', 'Peluches'),
        ('G', 'Golosinas'),
        ('O', 'Otro')
    ]
    nameOfProduct = models.CharField(max_length=20)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    dueDate = models.DateField()
    kindOfProduct = models.CharField(max_length=2, choices=PRODUCTS_CHOICES)

    def __str__(self):
        return self.nameOfProduct