require 'rails_helper'

RSpec.describe "categories/new", type: :view do
  before(:each) do
    assign(:category, Category.new(
      :title => "MyString",
      :about => "MyText",
      :user_id => 1
    ))
  end

  it "renders new category form" do
    render

    assert_select "form[action=?][method=?]", categories_path, "post" do

      assert_select "input[name=?]", "category[title]"

      assert_select "textarea[name=?]", "category[about]"

      assert_select "input[name=?]", "category[user_id]"
    end
  end
end
