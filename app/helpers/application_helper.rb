module ApplicationHelper

  def account_names_and_ids
    hash = { '': nil } # remove nil later
    Account.all.each do |element|
      hash.update(element.title => element.id)
    end
    hash
  end

  def category_names_and_ids
    hash = { '': nil } # remove nil later
    Category.all.each do |element|
      hash.update(element.title => element.id)
    end
    hash
  end

  def current_amount(id)
    amount = 0
    Transaction.where('account_id': id).each do |element|
      amount += element.amount
    end
    amount
  end

end
