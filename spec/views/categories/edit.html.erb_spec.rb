require 'rails_helper'

RSpec.describe "categories/edit", type: :view do
  before(:each) do
    @category = assign(:category, Category.create!(
      :title => "MyString",
      :about => "MyText",
      :user_id => 1
    ))
  end

  it "renders the edit category form" do
    render

    assert_select "form[action=?][method=?]", category_path(@category), "post" do

      assert_select "input[name=?]", "category[title]"

      assert_select "textarea[name=?]", "category[about]"

      assert_select "input[name=?]", "category[user_id]"
    end
  end
end
