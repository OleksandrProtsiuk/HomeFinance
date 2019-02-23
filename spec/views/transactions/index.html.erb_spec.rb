require 'rails_helper'

RSpec.describe "transactions/index", type: :view do
  before(:each) do
    assign(:transactions, [
      Transaction.create!(
        :from_acc_id => 2,
        :from_acc_val => "9.99",
        :to_acc_id => 3,
        :to_acc_val => "9.99",
        :value => "9.99",
        :comment => "MyText"
      ),
      Transaction.create!(
        :from_acc_id => 2,
        :from_acc_val => "9.99",
        :to_acc_id => 3,
        :to_acc_val => "9.99",
        :value => "9.99",
        :comment => "MyText"
      )
    ])
  end

  it "renders a list of transactions" do
    render
    assert_select "tr>td", :text => 2.to_s, :count => 2
    assert_select "tr>td", :text => "9.99".to_s, :count => 2
    assert_select "tr>td", :text => 3.to_s, :count => 2
    assert_select "tr>td", :text => "9.99".to_s, :count => 2
    assert_select "tr>td", :text => "9.99".to_s, :count => 2
    assert_select "tr>td", :text => "MyText".to_s, :count => 2
  end
end
