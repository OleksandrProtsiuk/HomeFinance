require 'rails_helper'

RSpec.describe "transactions/edit", type: :view do
  before(:each) do
    @transaction = assign(:transaction, Transaction.create!(
      :from_acc_id => 1,
      :from_acc_val => "9.99",
      :to_acc_id => 1,
      :to_acc_val => "9.99",
      :value => "9.99",
      :comment => "MyText"
    ))
  end

  it "renders the edit transaction form" do
    render

    assert_select "form[action=?][method=?]", transaction_path(@transaction), "post" do

      assert_select "input[name=?]", "transaction[from_acc_id]"

      assert_select "input[name=?]", "transaction[from_acc_val]"

      assert_select "input[name=?]", "transaction[to_acc_id]"

      assert_select "input[name=?]", "transaction[to_acc_val]"

      assert_select "input[name=?]", "transaction[value]"

      assert_select "textarea[name=?]", "transaction[comment]"
    end
  end
end
