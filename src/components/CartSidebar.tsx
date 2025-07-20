import React from 'react';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetFooter } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Plus, Minus, Trash2 } from 'lucide-react';
import { useCartStore } from '@/store/cartStore';
import { useNavigate } from 'react-router-dom';

const CartSidebar: React.FC = () => {
  const {
    items,
    isOpen,
    closeCart,
    updateQuantity,
    removeItem,
    getTotal,
    clearCart
  } = useCartStore();
  const navigate = useNavigate();

  const handleCheckout = () => {
    closeCart();
    navigate('/checkout');
  };

  const total = getTotal();

  return (
    <Sheet open={isOpen} onOpenChange={closeCart}>
      <SheetContent className="w-[400px] sm:w-[540px]">
        <SheetHeader>
          <SheetTitle>Your Order</SheetTitle>
        </SheetHeader>
        
        <div className="flex flex-col h-full">
          {items.length === 0 ? (
            <div className="flex-1 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">🍱</div>
                <p className="text-gray-500">Your cart is empty</p>
                <p className="text-sm text-gray-400 mt-2">Add some delicious sushi to get started!</p>
              </div>
            </div>
          ) : (
            <>
              <div className="flex-1 overflow-auto py-4">
                <div className="space-y-4">
                  {items.map((item) => (
                    <div key={item.id} className="flex items-center space-x-3 p-3 border rounded-lg">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-16 object-cover rounded"
                      />
                      <div className="flex-1">
                        <h4 className="font-medium">{item.name}</h4>
                        <p className="text-sm text-gray-500">${item.price.toFixed(2)} each</p>
                        <div className="flex items-center space-x-2 mt-2">
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          >
                            <Minus className="h-3 w-3" />
                          </Button>
                          <span className="w-8 text-center">{item.quantity}</span>
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          >
                            <Plus className="h-3 w-3" />
                          </Button>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">${(item.price * item.quantity).toFixed(2)}</p>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 text-red-500 hover:text-red-700 hover:bg-red-50"
                          onClick={() => removeItem(item.id)}
                        >
                          <Trash2 className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="border-t pt-4">
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Subtotal</span>
                    <span className="text-sm">${total.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Tax</span>
                    <span className="text-sm">${(total * 0.08).toFixed(2)}</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between items-center font-semibold text-lg">
                    <span>Total</span>
                    <span>${(total * 1.08).toFixed(2)}</span>
                  </div>
                </div>
                
                <div className="space-y-2 mt-4">
                  <Button onClick={handleCheckout} className="w-full" size="lg">
                    Proceed to Checkout
                  </Button>
                  <Button
                    variant="outline"
                    onClick={clearCart}
                    className="w-full"
                    size="sm"
                  >
                    Clear Cart
                  </Button>
                </div>
              </div>
            </>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default CartSidebar;