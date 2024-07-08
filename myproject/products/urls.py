from django.urls import path
from .views import ProductCreateView, ProductListView, ProductDeleteAPIView, ProductUpdateAPIView

urlpatterns = [
    path('products/create/', ProductCreateView.as_view(), name='product-create'),
    path('list/', ProductListView.as_view(), name='product-create'),
    path('products/delete/<int:id>/', ProductDeleteAPIView.as_view(), name='product-delete'),
    path('products/update/<int:id>/', ProductUpdateAPIView.as_view(), name='product-update'),
]