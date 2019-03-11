class StaticPagesController < ApplicationController
  def index
  end

  def home
    @accounts = Account.all
    @transactions = Transaction.all
    @categories = Category.all
  end

  def about
  end
end
