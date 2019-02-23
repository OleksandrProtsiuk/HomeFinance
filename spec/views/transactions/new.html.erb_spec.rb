require 'rails_helper'

RSpec.describe "transactions/new", type: :view do
  before(:each) do
    assign(:transaction, Transaction.new(
      :from_acc_id => 1,
      :from_acc_val => "9.99",
      :to_acc_id => 1,
      :to_acc_val => "9.99",
      :value => "9.99",
      :comment => "MyText"
    ))
  end

  it "renders new transaction form" do
    render

    assert_select "form[action=?][method=?]", transactions_path, "post" do

      assert_select "input[name=?]", "transaction[from_acc_id]"

      assert_select "input[name=?]", "transaction[from_acc_val]"

      assert_select "input[name=?]", "transaction[to_acc_id]"

      assert_select "input[name=?]", "transaction[to_acc_val]"

      assert_select "input[name=?]", "transaction[value]"

      assert_select "textarea[name=?]", "transaction[comment]"
    end
  end
end
