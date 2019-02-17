require 'rails_helper'

RSpec.describe "accounts/new", type: :view do
  before(:each) do
    assign(:account, Account.new(
      :title => "MyString",
      :value => "9.99",
      :status => "MyString",
      :category_id => 1
    ))
  end

  it "renders new account form" do
    render

    assert_select "form[action=?][method=?]", accounts_path, "post" do

      assert_select "input[name=?]", "account[title]"

      assert_select "input[name=?]", "account[value]"

      assert_select "input[name=?]", "account[status]"

      assert_select "input[name=?]", "account[category_id]"
    end
  end
end
