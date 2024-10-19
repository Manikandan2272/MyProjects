export class PaymentService {

    paymentData: any[] = [{ username: "surya", price: 70, cardNumber: 1234515973284655 }, { username: "bharath", price: 45, cardNumber: 7852131456325879 },
    { username: "udhaya", price: 76, cardNumber: 1875285462579135 }, { username: "vijay", price: 55, cardNumber: 1547874123698521 }];

    showUserPayment() {
        return this.paymentData;
    }

    addUserData(value: any) {
        this.paymentData.push(value);
    }

    deleteUserData(index: number) {
        this.paymentData.splice(index, 1);
    }

}