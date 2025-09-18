"use client";

import Image from "next/image";
import { Plus, Minus } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetFooter,
  SheetClose,
} from "@/components/ui/sheet";
import { useCart } from "@/hooks/use-cart";
import { formatPrice } from "@/lib/products";
import { CheckoutModal } from "./checkout-modal";

export function CartDrawer() {
  const { items, removeItem, updateQuantity, total, isOpen, closeCart, openCart } =
    useCart();

  return (
    <Sheet open={isOpen} onOpenChange={(open) => (open ? openCart() : closeCart())}>
      <SheetContent className="flex flex-col">
        <SheetHeader>
          <SheetTitle>O teu carrinho</SheetTitle>
        </SheetHeader>
        
        <div className="flex-1 overflow-auto p-4">
          {items.length === 0 ? (
            <p className="text-muted-foreground text-center py-8">
              O carrinho está vazio
            </p>
          ) : (
            <div className="space-y-4">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="grid grid-cols-[64px_1fr_auto] gap-3 p-3 border border-border rounded-xl"
                >
                  <div className="w-16 h-16 bg-muted rounded-lg overflow-hidden">
                    {item.product.image && (
                      <Image
                        src={item.product.image}
                        alt={item.product.name}
                        width={64}
                        height={64}
                        className="w-full h-full object-cover"
                      />
                    )}
                  </div>

                  <div>
                    <h4 className="font-semibold text-sm">
                      {item.product.brand && `${item.product.brand} • `}
                      {item.product.name}
                    </h4>
                    <p className="text-xs text-muted-foreground">
                      {formatPrice(item.product.price)} •{" "}
                      {item.product.category}
                    </p>
                  </div>

                  <div className="flex flex-col items-end gap-2">
                    <div className="flex items-center border border-border rounded-lg">
                      <button
                        type="button"
                        aria-label="diminuir quantidade"
                        onClick={() =>
                          updateQuantity(item.productId, item.quantity - 1)
                        }
                        className="p-1 hover:bg-muted"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="px-2 py-1 text-sm min-w-[40px] text-center">
                        {item.quantity}
                      </span>
                      <button
                        type="button"
                        aria-label="aumentar quantidade"
                        onClick={() =>
                          updateQuantity(item.productId, item.quantity + 1)
                        }
                        className="p-1 hover:bg-muted"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => removeItem(item.productId)}
                    >
                      Remover
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        
        {items.length > 0 && (
          <SheetFooter>
            <div className="p-4 border-t border-border w-full">
              <div className="flex items-center justify-between mb-4">
                <span className="text-muted-foreground">Subtotal</span>
                <span className="font-bold text-lg">{formatPrice(total)}</span>
              </div>
            </div>
          </SheetFooter>
        )}
      </SheetContent>
    </Sheet>
  );
}
