# frozen_string_literal: true

class Shared::Button::Component < ApplicationViewComponent
  def initialize(text:, link:, turbo_frame: "none")
    @text = text
    @link = link
    @turbo_frame = turbo_frame
  end
end
