
import OrderCard from './OrderCard';

function OrderList() {
    return (
        <div className="container mx-auto my-10">
            <div className="  justify-items-center grid grid-cols-1 gap-y-4 sm:grid-cols-1 gap-y-8 md:grid-cols-1 gap-y-8 lg:grid-cols-2 gap-x-4 gap-y-8 " >
                <OrderCard />
                <OrderCard />
                <OrderCard />
                <OrderCard />
            </div>

        </div>
    )
}

export default OrderList
