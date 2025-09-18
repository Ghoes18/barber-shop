"use client";

import { useState } from "react";
import Image from "next/image";
import { Plus, Minus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { PRODUCTS, CATEGORIES, formatPrice } from "@/lib/products";
import { useCart } from "@/hooks/use-cart";

export function ProductCatalog() {
  const [activeCategory, setActiveCategory] = useState("Tudo");
  const [searchQuery, setSearchQuery] = useState("");
  const { addItem } = useCart();

  const filteredProducts = PRODUCTS.filter((product) => {
    const matchesCategory =
      activeCategory === "Tudo" || product.category === activeCategory;
    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (product.brand?.toLowerCase().includes(searchQuery.toLowerCase()) ??
        false);
    return matchesCategory && matchesSearch;
  });

  const handleAddToCart = (product: any, quantity: number) => {
    addItem(product, quantity);
  };

  return (
    <section id="catalogo" className="py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-start gap-4 border-b border-border pb-4 mb-6 sm:flex-row sm:items-end sm:justify-between">
          <h3 className="text-2xl font-bold">Catálogo</h3>
          <Input
            placeholder="Procurar produtos…"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full sm:max-w-xs"
          />
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap gap-2 mb-8">
          {CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-3 py-2 rounded-full border text-sm transition-colors ${
                activeCategory === category
                  ? "bg-primary text-primary-foreground border-transparent"
                  : "bg-card text-muted-foreground border-border hover:bg-accent"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={handleAddToCart}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductCard({
  product,
  onAddToCart,
}: {
  product: any;
  onAddToCart: (product: any, qty: number) => void;
}) {
  const [quantity, setQuantity] = useState(1);

  return (
    <Card className="overflow-hidden">
      <div className="aspect-square relative bg-gradient-to-br from-muted via-card to-background border-b border-border">
        {product.stock === 0 && (
          <div className="absolute top-2 left-2 bg-primary text-primary-foreground text-xs font-bold px-2 py-1 rounded-full z-10">
            ESGOTADO
          </div>
        )}
        {product.image && (
          <Image
            src={product.image}
            alt={`${product.brand} ${product.name}`}
            fill
            className="object-cover"
          />
        )}
      </div>

      <CardContent className="p-4">
        <h4 className="font-semibold mb-2">
          {product.brand && (
            <span className="opacity-80">{product.brand} • </span>
          )}
          {product.name}
        </h4>
        <p className="text-sm text-muted-foreground mb-3">{product.note}</p>

        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center border border-border rounded-xl">
            <button
              aria-label="diminuir quantidade"
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="p-2 hover:bg-muted"
              disabled={quantity <= 1}
            >
              <Minus className="w-4 h-4" />
            </button>
            <span className="px-3 py-2 min-w-[50px] text-center">
              {quantity}
            </span>
            <button
              aria-label="aumentar quantidade"
              onClick={() => setQuantity(quantity + 1)}
              className="p-2 hover:bg-muted"
            >
              <Plus className="w-4 h-4" />
            </button>
          </div>

          <div className="text-right">
            <div className="font-bold">{formatPrice(product.price)}</div>
          </div>
        </div>

        <Button
          onClick={() => onAddToCart(product, quantity)}
          disabled={product.stock === 0}
          className="w-full"
          variant={product.stock === 0 ? "secondary" : "default"}
        >
          {product.stock === 0 ? "Indisponível" : "Adicionar"}
        </Button>

        <p className="text-xs text-muted-foreground mt-2">
          Stock: {product.stock}
        </p>
      </CardContent>
    </Card>
  );
}
