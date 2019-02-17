require 'rails_helper'

RSpec.describe "accounts/edit", type: :view do
  before(:each) do
    @account = assign(:account, Account.create!(
      :title => "MyString",
      :value => "9.99",
      :status => "MyString",
      :category_id => 1
    ))
  end

  it "renders the edit account form" do
    render

    assert_select "form[action=?][method=?]", account_path(@account), "post" do

      assert_select "input[name=?]", "account[title]"

      assert_select "input[name=?]", "account[value]"

      assert_select "input[name=?]", "account[status]"

      assert_select "input[name=?]", "account[category_id]"
    end
  end
end
