
    assert_equal_builder

    assert_equal_builder

    assert_equal_builder

    assert_equal_builder

    assert_equal_builder

    assert_equal_builder

    assert_equal_builder

    assert_equal_builder

    assert_equal_builder

    assert_equal_builder
  def assert_equal_builder
    diff = GitDiff::GitDiffParser.new(@diff_lines.join("\n")).parse_one
    builder = GitDiff::GitDiffBuilder.new()
    actual = builder.build(diff, @source_lines)
    assert_equal @expected, actual
  end

  #- - - - - - - - - - - - - - - - - - - - - - -
