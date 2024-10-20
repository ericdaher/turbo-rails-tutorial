# frozen_string_literal: true

class Quote::Component < ApplicationViewComponent
  with_collection_parameter :quote

  def initialize(quote:)
    @quote = quote
  end
end
