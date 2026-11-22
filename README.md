# FIOVA project website

Static project page for [FIOVA (Five-in-One Video Annotations)](https://huuuuusy.github.io/fiova/).

## Local preview

Run from the repository root:

```sh
python3 -m http.server 8766 --bind 127.0.0.1
```

Open http://127.0.0.1:8766. No package installation or build step is required.

## Page and media

- `index.html`: current page, semantic result tables, and video demos.
- `static/css/index.css`: responsive layout and styles.
- `static/js/index.js`: example selection and figure enlargement. All examples and figure links remain usable without JavaScript.
- `static/images/current/`: figures exported from the September 2026 manuscript and retained source case panels. `event-weighting.png` was re-exported on 2026-11-13 from the corrected Fig. 7 (`acc15-eg-r3.pdf`, Precision 0.507 from the three UCG-supported prediction events). `human-agreement.png` was replaced on 2026-11-23 by the R3 appendix figure (`scatter_paired_fiova_vs_auto_by_metric-r3.png`), and the human-ranking correlations follow R3 Table IV (FIOVA-DQ 0.196 / 0.344 / 0.418).

The September 2026 update follows manuscript revision `94491f2`. Quantitative sources are main-paper Tables I, III, IV, V and Appendix Table A6. Update the displayed HTML tables against the manuscript when revising results. Downloadable result files are not provided. F1 values are averages of per-video F1, not calculated from aggregate Precision and Recall. The six baseline models cover all 3,002 videos; the twelve-model comparison covers the 169-video hard subset.

`index-V1.html`, `index-V2.html`, and older assets are retained as historical versions. This local update does not publish the website.

Contact: shiyu.hu@ntu.edu.sg

The six video demos show the supplementary source clips followed by five human descriptions and UCG, with no model outputs. `static/videos/` contains video-only MP4s prepared for browser playback; captions are embedded in HTML. Caption text follows the example slides; the bicycle UCG matches the current appendix panel. Selecting another example pauses the previous video. Four additional manuscript figures cover dataset statistics, annotation variability, paired human agreement, and subgroup performance.
